import { useState } from "react";
import { FormEvent } from "../types";
import css from "./css.module.css";
import Select from "../components/Select/Select";
import { BASE, OPTIONS } from "./consts";

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
				<Select name="base-origin" options={OPTIONS} title="Base original" />
				<Select
					name="base-to-convert"
					options={OPTIONS}
					title="Conversión"
					defaultValue={BASE.binario}
				/>
				<input type="number" name="num" />
				<button>Convertir</button>
			</form>
			<div>{result}</div>
		</div>
	);
}
