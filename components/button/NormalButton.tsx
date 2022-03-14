import React, { ButtonHTMLAttributes } from 'react'
import tw, { styled } from 'twin.macro'

const NormalButton = React.forwardRef<
    HTMLButtonElement,
    React.PropsWithChildren<ButtonHTMLAttributes<any>>
>(({ children, ...props }, ref) => {
    return (
        <CustomButton ref={ref} {...props}>
            {children}
        </CustomButton>
    )
})

const CustomButton = styled.button`
    ${tw`inline-flex h-[38px] items-center text-dark-2 py-2 px-4 rounded-xl bg-light-2 hover:bg-light-1 transition-colors`}
`

NormalButton.displayName = 'NormalButton'
export default NormalButton
