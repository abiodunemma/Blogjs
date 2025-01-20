import Image from 'next/image'

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
    const variantClasses = {
        btn_black: 'bg-green-90 text-white border-black-500 py-4 hover:bg-black',
        btn_white: 'bg-white-90 text-black border-black-500 py-4 hover:bg-gray',
        btn_red: 'bg-red-500 text-white border-red-500 hover:bg-red-600',
        btn_blue: 'bg-blue-500 text-white border-blue-500 hover:bg-blue-600',
        // Default fallback class
        default: 'bg-gray-300 text-gray-800 border-gray-300 hover:bg-gray-400',
      };


  // Get the classes based on the variant, fallback to 'default' if not found
  const buttonClasses = variantClasses[variant] || variantClasses.default;
return (
<button className={`flexCenter  gap-3 w-full rounded-lg border mt-4 ${buttonClasses}`}
type={type}
>
{icon && <Image src={icon} alt={title} width={24} height={24} />}
<label className='bold-16 whitespace-nowrap'>{title}</label>
</button>
  )
}

export default Button