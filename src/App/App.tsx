import { useState } from "react";
import { FormEvent } from "../types";
import css from "./css.module.css";
import { BASE, OPTIONS } from "./consts";
import Select from "../components/Select/Select";
import InputNumber from "../components/InputNumber/InputNumber";
import Btn from "../components/Btn/Btn";

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
				<InputNumber name="num" />
				<Select name="original" opt={OPTIONS} />
				<div className={css.result}>{result}</div>
				<Select name="convert" opt={OPTIONS} defaultValue={BASE.binario} />
				<Btn>Convertir</Btn>
			</form>
		</div>
	);
}
