export interface Suggest<T> {
  success: boolean;
  response: T;
}

export interface ShopInfoResponse {
  id: number;
  rating: unknown | number;
  name: string;
  domain: string;
  last_domain: string;
  delivery_type: string;
  description: string;
  user_id: number;
  is_active: number;
  is_banned: number;
  is_premium: number;
  hide_copyright: number;
  hide_copyright_till: unknown;
  is_verified: number;
  vk_link: string | unknown;
  youtube_link: string | unknown;
  discord_link: string | unknown;
  twitch_link: string | unknown;
  instagram_link: string | unknown;
  tiktok_link: string | unknown;
  telegram_link: string | unknown;
  theme_id: number;
  background: string;
  logo: string;
  favicon: string;
  css: string | unknown;
  enable_background_overlay: number;
  hide_side_image: number;
  hide_general_online: number;
  products_image_padding: number;
  hide_servers: number;
  test_mode: number;
  test_mode_from: string;
  created_at: string;
  updated_at: string;
  side: string;
  key: string;
  color: string;
  require_email: number;
  pay_commission: number;
  particles: string;
  sort_index: unknown;
  https_redirect: number;
  allow_nickname_spaces: number;
  game_id: number;
  hide_payment_instruction: number;
  payment_instruction: unknown;
  use_cart: number;
}

export interface ProductResponse {
  id: number;
  name: string;
  price: number;
  old_price: number | unknown;
  type: string;
  number: number;
  is_hidden: number;
  commands: Array<string>;
  withdraw_commands: string | unknown;
  withdraw_commands_days: string | unknown;
  additional_fields: string | unknown;
  description: string;
  category_id: number | string | unknown;
  image: string;
  first_delete: number;
  shop_id: number;
  created_at: string;
  updated_at: string;
  sort_index: number;
  servers: Server;
}

export interface Server {
  id: number;
  name: string;
  ip: string;
  port: string;
  version: string;
  is_port_hidden: number;
  hide_ip: number;
  is_hidden: number;
  shop_id: number;
  created_at: string;
  updated_at: string;
}

export interface ServerResponse extends Server {
  is_plugin_installed: number;
  sort_index: unknown;
  disable_payments: number;
  products: ProductResponse[];
}

export interface SalesResponse {
  id: number;
  name: string;
  sale: number;
  shop_id: number;
  start_at: string | unknown;
  expires_at: string | unknown;
  created_at: string;
  updated_at: string;
  products: ProductResponse[];
}

export interface CouponsResponse {
  id: number;
  name: string;
  code: string;
  sale: number;
  limit: string | unknown;
  expires_at: string | unknown;
  shop_id: number;
  created_at: string;
  updated_at: string;
  products: ProductResponse[];
}

export interface LinkResponse {
  url: string;
  payment: {
    id: number;
    created_from: string;
    ps_id: unknown;
    hash: string;
    customer: string;
    email: string;
    ip: string;
    shop_id: number;
    server_id: number;
    delivery_type: string;
    status: number;
    cancelled: number;
    is_replenished: number;
    enrolled: number;
    payment_system: unknown;
    payment_type: unknown;
    sent_commands: unknown;
    error: unknown;
    success_url: string;
    make_repeat: number;
    created_at: string;
    updated_at: string;
    attempts: number;
    cost: number;
    total_cost: unknown;
    was_sent: number;
    payload: unknown;
    rating: unknown;
    server: ServerResponse;
    products: ProductResponse;
  };
}
