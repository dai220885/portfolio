import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Button.module.scss'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
	xType?: string
	buttonValue?: string
}

const Button: React.FC<SuperButtonPropsType> = (
	{
		buttonValue,
		xType,
		className,
		disabled,
		...restProps // все остальные пропсы попадут в объект restProps, там же будет children
	}
) => {
	const finalClassName = s.button
		+ (disabled
			? ' ' + s.disabled
			: xType === 'red'
				? ' ' + s.red
				: xType === 'secondary'
					? ' ' + s.secondary
					: ' ' + s.default)
		// + (disabled
		//         ? ...
		//         : xType === 'red'
		//             ? ...
		+ (className ? ' ' + className : '') // задачка на смешивание классов

	return (
		<button
			disabled={disabled}
			className={finalClassName}
			{...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
		>{buttonValue}</button>
	)
}

export default Button
