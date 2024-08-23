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
		const baseOrigin = Number(form.get("original"));
		const baseToConvert = Number(form.get("convert"));
		const num = form.get("num") as string;
		const numInBaseOrigin = parseInt(num, baseOrigin);
		const result = numInBaseOrigin.toString(baseToConvert);

		setResult(result);
	};

	return (
		<div className={css.app}>
			<form onSubmit={convert} className={css.form}>
				<Select name="original" options={OPTIONS} title="Original" />
				<input type="number" name="num" />
				<Select
					name="convert"
					options={OPTIONS}
					title="Conversión"
					defaultValue={BASE.binario}
				/>
				<button>Convertir</button>
			</form>
			<div>{result}</div>
		</div>
	);
}
