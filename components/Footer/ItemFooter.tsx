interface ItemFooterProps{
    url?: string;
    name: string;
}

const ItemFooter = ({ url, name }: ItemFooterProps) => {
  return (
        <>
            <span className="block cursor-pointer text-gray hover:text-primary no-underline hover:underline transition-all duration-300 ease-in-out">
                {name}
            </span>
        </>
  )
}

export default ItemFooter
