import { ReactNode } from "react";
import { Button } from "react-bootstrap";

type props = {
  type?: 'primary' | 'secondary',
  classes?: string
  children: ReactNode;
  href: string;
}

export default function BtnLink({
  type = "primary",
  classes = '',
  href,
  children,
}: props) {
  const buttonClasses = `${type === 'primary' ? 'text-white' : ''} ${classes}`

  return (
    <div className="pt-2">
      <a href={href.startsWith('/') ? href : `/${href}`}>
        <Button
          variant={type as string}
          className={buttonClasses}
        >
          {children}
        </Button>
      </a>
    </div>
  )
}
