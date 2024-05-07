export interface DefaultComponentProps {
  children?: React.ReactNode
}
export interface LinkWithBadgeProps extends DefaultComponentProps {
  badge?: string
}

export interface ExpansionPanelProps extends DefaultComponentProps {
  icon?: string
  title?: React.ReactNode
  isActive?: boolean
  onClick?: () => void
}

export interface GradientProps extends DefaultComponentProps {
  className?: string
}

export interface ComingSoonData {
  image: string
  title: string
  subtitle: string
  description: string
}
export interface ComingSoonCardProps
  extends DefaultComponentProps,
    ComingSoonData {}
