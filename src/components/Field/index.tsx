import { Input, InputGroup, InputLeftAddon, InputRightAddon, ResponsiveValue } from "@chakra-ui/react";

interface Props {
	register: any,
	name: string,
	placeholder: string,
	type: string,
	value?: string,
	variant?: ResponsiveValue<"outline" | (string & {}) | "filled" | "flushed" | "unstyled">,
	leftIcon?: JSX.Element,
	rightIcon?: JSX.Element,
	color?: string
}

export function Field({ register, name, placeholder, type, value, leftIcon, rightIcon, variant='filled', color }: Props) {
	return (
		<InputGroup>
			{leftIcon && <InputLeftAddon bgColor='transparent' border='none'>
				{leftIcon}
			</InputLeftAddon>
			}
			<Input
				{...register(name, { value })}
				variant={variant}
				placeholder={placeholder}
				color={color}
				type={type}
				p='15px'
				w='100%'
				border='none'
				borderRadius='10px'
			/>
			{rightIcon && <InputRightAddon bgColor='transparent' border='none'>
				{rightIcon}
			</InputRightAddon>
			}
		</InputGroup>
	);
}