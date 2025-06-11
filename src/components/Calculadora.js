import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import "./Calculadora.css";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Calculadora = () => {
  const [num, setNum] = useState(0);
  const [valorArmazenado, setValorArmazenado] = useState(0);
  const [operador, setOperador] = useState();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Adiciona ou remove a classe "dark" no <html>
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const mudarTema = () => {
    setDarkMode(!darkMode);
  };

  const mudar = (e) => {
    let input = e.target.value;

    if (input === "." && num.toString().includes(".")) {
      return;
    }

    if (num.toString() === "0" && input !== ".") {
      setNum(input);
    } else if (num.toString() === "0" && input === ".") {
      setNum("0.");
    } else if (num.length <= 10) {
      setNum(num + input);
    }
  };

  const limpar = () => {
    setNum(0);
    setOperador();
  };

  const ce = () => {
    setNum(0);
  };

  const porcentagem = () => {
    setNum(num / 100);
  };

  const positivoOuNegativo = () => {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  };

  const qualOperador = (e) => {
    let inputOperador = e.target.value;
    setOperador(inputOperador);
    setValorArmazenado(num);
    setNum(0);
  };

  const calcular = () => {
    if (operador === "/") {
      setNum(parseFloat(valorArmazenado) / parseFloat(num));
    } else if (operador === "X") {
      setNum(parseFloat(valorArmazenado) * parseFloat(num));
    } else if (operador === "-") {
      setNum(parseFloat(valorArmazenado) - parseFloat(num));
    } else if (operador === "+") {
      setNum(parseFloat(valorArmazenado) + parseFloat(num));
    }
  };

  return (
    <Container
      maxWidth="xs"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className={`calculadora ${darkMode ? "dark" : ""}`}>
        <div style={{ textAlign: "left", paddingLeft: "0.5em" }}>
          <IconButton onClick={mudarTema} disableRipple className="botao">
            {" "}
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}{" "}
          </IconButton>
        </div>
        <div className={`display ${darkMode ? "dark" : ""}`}>{num}</div>
        <button onClick={limpar}>C</button>
        <button onClick={ce}>CE</button>
        <button onClick={positivoOuNegativo}>+/-</button>
        <button onClick={porcentagem}>%</button>

        <button onClick={mudar} value={7}>
          7
        </button>
        <button onClick={mudar} value={8}>
          8
        </button>
        <button onClick={mudar} value={9}>
          9
        </button>
        <button onClick={qualOperador} value="/">
          /
        </button>

        <button onClick={mudar} value={4}>
          4
        </button>
        <button onClick={mudar} value={5}>
          5
        </button>
        <button onClick={mudar} value={6}>
          6
        </button>
        <button onClick={qualOperador} value="X">
          X
        </button>

        <button onClick={mudar} value={1}>
          1
        </button>
        <button onClick={mudar} value={2}>
          2
        </button>
        <button onClick={mudar} value={3}>
          3
        </button>
        <button onClick={qualOperador} value="-">
          -
        </button>

        <button onClick={mudar} value={0}>
          0
        </button>
        <button onClick={mudar} value={"."}>
          .
        </button>
        <button onClick={calcular}>=</button>
        <button onClick={qualOperador} value="+">
          +
        </button>
      </div>
    </Container>
  );
};

export default Calculadora;
