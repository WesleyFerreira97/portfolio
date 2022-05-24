import { useState } from "react";

export function useDisableInteraction(setTime: number) {
	const [isDisable, setDisable] = useState<boolean>(false);

	const disableInteraction = () => {
		setDisable(true);

		setTimeout(() => {
			setDisable(false);
		}, setTime);
	};

	return { isDisable, disableInteraction };
}
