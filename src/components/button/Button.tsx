import { ReactNode } from "react";
import { Button } from "react-bootstrap";

type props = {
  type?: 'primary' | 'secondary',
  classes?: string
  children: ReactNode;
  href?: string;
  click?: () => void;
}

export default function Btn({
  type = "primary",
  classes = '',
  href,
  children
}: props) {
  const buttonClasses = `${type === 'primary' ? 'text-white' : ''} ${classes}`

  const node = <Button
    variant={type as string}
    className={buttonClasses}
  >
    {children}
  </Button>;

  const link = href ? (href.startsWith('/') ? href : `/${href}`) : null;

  return (
    <div className="pt-2">
      {href && <a href={link!}>{node}</a>}
      {!href && node}
    </div>
  )
}
