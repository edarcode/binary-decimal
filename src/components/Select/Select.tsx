import css from "./css.module.css";
import Arrow from "./icons/Arrow.js";
import { KINDS } from "./kinds.js";
import { joinClass } from "./utils/joinClass.js";

export default function Select(props: Props) {
	const { className, opt, kind, ...extraProps } = props;

	const finalClass = joinClass([css.wrapper_select, className]);
	const finalClassSelect = joinClass([css.select, KINDS[kind ?? "primary"]]);

	return (
		<div className={finalClass}>
			<select {...extraProps} className={finalClassSelect}>
				{opt.map(item => (
					<option key={item.value} value={item.value}>
						{item.display}
					</option>
				))}
			</select>
			<Arrow className={css.arrow} />
		</div>
	);
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
	opt: { value: any; display: string }[];
	kind?: keyof typeof KINDS;
}
