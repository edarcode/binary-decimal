import { Select as SelectType } from "../../types";

export default function Select(props: Props) {
	const { options: values, title, ...extraProps } = props;
	return (
		<label>
			<span>{title}</span>
			<select {...extraProps}>
				{values.map(item => (
					<option key={item.value} value={item.value}>
						{item.display}
					</option>
				))}
			</select>
		</label>
	);
}

interface Props extends SelectType {
	title: string;
	options: { value: number; display: string }[];
}
