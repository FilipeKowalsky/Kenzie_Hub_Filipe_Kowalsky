import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
	--color-color-primary: #ff577f;
	--color-color-primary-50: #ff427f;
	--color-color-primary-disable: #59323f;
	--color-grey-4: #121214;
	--color-grey-3: #212529;
	--color-grey-2: #343b41;
	--color-grey-1: #868e96;
	--color-grey-0: #f8f9fa;
	--color-sucess: #3fe864;
	--color-negative: #e83f5b;
}

*{
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

  #root{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		min-height: 100vh;
	}

  body, html {
		width: 100vw;
		min-height: 100vh;
		background: var(--color-background);
		overflow-x: hidden;
	}

  body, input, button, textarea{
		font-family: 'Inter', sans-serif;
	}

  button{
		cursor: pointer;
	}

	::placeholder {
    color: var(--color-grey-1);
  }

	li {
  list-style-type: none;
}
`