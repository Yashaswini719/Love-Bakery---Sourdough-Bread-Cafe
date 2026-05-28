create extension if not exists "pgcrypto";

create table cafes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  address text,
  phone text,
  whatsapp text,
  map_url text,
  created_at timestamptz not null default now()
);

create table menu_categories (
  id uuid primary key default gen_random_uuid(),
  cafe_id uuid not null references cafes(id) on delete cascade,
  name text not null,
  slug text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  unique (cafe_id, slug)
);

create table menu_items (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references menu_categories(id) on delete cascade,
  name text not null,
  description text,
  price numeric(10, 2) not null,
  image_url text,
  is_featured boolean not null default false,
  is_available boolean not null default true,
  created_at timestamptz not null default now()
);

create table gallery (
  id uuid primary key default gen_random_uuid(),
  cafe_id uuid not null references cafes(id) on delete cascade,
  title text,
  image_url text not null,
  alt text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table reservations (
  id uuid primary key default gen_random_uuid(),
  cafe_id uuid references cafes(id) on delete set null,
  guest_name text not null,
  guest_email text,
  guest_phone text not null,
  party_size int not null check (party_size > 0 and party_size <= 20),
  reservation_at timestamptz not null,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'cancelled')),
  notes text,
  created_at timestamptz not null default now()
);

create table reviews (
  id uuid primary key default gen_random_uuid(),
  cafe_id uuid not null references cafes(id) on delete cascade,
  guest_name text not null,
  role text,
  rating int not null check (rating between 1 and 5),
  quote text not null,
  is_featured boolean not null default false,
  created_at timestamptz not null default now()
);

create table settings (
  id uuid primary key default gen_random_uuid(),
  cafe_id uuid not null references cafes(id) on delete cascade,
  key text not null,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  unique (cafe_id, key)
);

create table admin_users (
  id uuid primary key references auth.users(id) on delete cascade,
  cafe_id uuid references cafes(id) on delete cascade,
  role text not null default 'manager' check (role in ('owner', 'manager')),
  created_at timestamptz not null default now()
);

alter table cafes enable row level security;
alter table menu_categories enable row level security;
alter table menu_items enable row level security;
alter table gallery enable row level security;
alter table reservations enable row level security;
alter table reviews enable row level security;
alter table settings enable row level security;
alter table admin_users enable row level security;

create policy "Public read menu categories" on menu_categories for select using (true);
create policy "Public read available menu items" on menu_items for select using (is_available = true);
create policy "Public read gallery" on gallery for select using (true);
create policy "Public read featured reviews" on reviews for select using (is_featured = true);
create policy "Guests create reservations" on reservations for insert with check (true);
