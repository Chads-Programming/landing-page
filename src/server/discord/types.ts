export interface DiscordMember {
  user: DiscordUser
  nick: string
  avatar: string | null
  banner: string | null
  roles: string[]
  joined_at: string
  deaf: boolean
  mute: boolean
}

export interface DiscordUser {
  id: string
  username: string
  discriminator: string
  avatar: string
  verified: true
  email: string
  flags: number
  banner: string
  accent_color: number
  premium_type: number
  public_flags: number
  avatar_decoration_data: {
    sku_id: string
    asset: string
  }
}
