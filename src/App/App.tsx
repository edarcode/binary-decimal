import { useState } from "react";
import { FormEvent } from "../types";
import css from "./css.module.css";

export default function App() {
	const [result, setResult] = useState("");

	const convert = (e: FormEvent) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const baseOrigin = Number(form.get("base-origin"));
		const baseToConvert = Number(form.get("base-to-convert"));
		const num = form.get("num") as string;

		const parse = parseInt(num, baseOrigin);
		const result = parse.toString(baseToConvert);
		setResult(result);
	};

	return (
		<div className={css.app}>
			<form onSubmit={convert} className={css.form}>
				<label>
					Número original
					<select name="base-origin">
						<option value={BASE.decimal}>Decimal</option>
						<option value={BASE.binario}>Binario</option>
						<option value={BASE.optal}>Optal</option>
						<option value={BASE.hexadecimal}>Hexadecimal</option>
					</select>
				</label>

				<label>
					Conversión
					<select name="base-to-convert" defaultValue={BASE.binario}>
						<option value={BASE.decimal}>Decimal</option>
						<option value={BASE.binario}>Binario</option>
						<option value={BASE.optal}>Optal</option>
						<option value={BASE.hexadecimal}>Hexadecimal</option>
					</select>
				</label>

				<input type="number" name="num" />
				<button>Convertir</button>
			</form>
			<div>{result}</div>
		</div>
	);
}

const BASE = {
	binario: 2,
	decimal: 10,
	optal: 8,
	hexadecimal: 16
};
