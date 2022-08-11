import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const LoginContainer = () => {
  const { register, handleSubmit, formState, setFocus } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const { errors, isDirty, dirtyFields, submitCount, isValid } = formState;
  const [incredibleBigWall, setIncredibleBigWall] = useState(true);
  const [visibleModal, setVisibleModal] = useState(false);
  const onSubmit = (data) => {
    if (isValid && incredibleBigWall) {
      setVisibleModal(true);
      console.log("Hum .... Toujours pas!");
      console.log("Tu dois te rendre sur la page Movie");
    }
  };

  useEffect(() => {
    const firstError = Object.keys(errors).reduce((field, a) => {
      return !!errors[field] ? field : a;
    }, null);
    if (firstError) {
      setFocus(firstError);
    }
  }, []);

  const Modal = () => {
    return (
      <div
        style={{
          position: "relative",
          alignSelf: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 50,
          border: "1px solid black",
          borderRadius: 25,
        }}
      >
        <div>Ils reagissent bizarrement ces 2 inputs nan ? </div>
        <div>Un peu de css serait le bienvenue je pense :)</div>
        <div style={{ marginTop: 30 }}>
          Et si tu te sent chaud tu pourrais peut-être régler le problème de
          focus ?!
        </div>
        <button
          style={{ marginTop: 20 }}
          onClick={() => setVisibleModal(false)}
        >
          Avec grand plaisir, j'adore react
        </button><br/>
        <Link to="/movies-list">
          <button>Mais si tu veux continuer c'est ici...</button>
        </Link>

      </div>
    );
  };

  const LabelizeInput = ({
    inputStyle,
    name,
    defaultValue,
    register,
    dirtyFields,
    errors,
    required,
  }) => {
    return (
      <div style={inputStyle.inputContainer}>
        <label className={!dirtyFields?.[name] ? "coucou2" : "coucou2"}>
          {name}
        </label>
        <input
          type={name === "mot de passe" ? "password" : "text"}
          style={inputStyle}
          defaultValue={defaultValue}
          // placeholder={name}
          {...register(name, { required: required })}
          onChange={(e) => {
            setFocus(name);
          }}
        />
        {errors?.[name] && (
          <span style={{ fontSize: 14, color: "red" }}>
            Le champ {name} est obligatoire
          </span>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100vh",
        justifyContent: "center",
      }}
    >
      {visibleModal && <Modal />}
      {!visibleModal && (
        <div className="w-full max-w-xs pt-6 ">
          <div className="text-center text-slate-600 decoration-wavy decoration-2 pb-10">
            <h1 className="">Bienvenue jeune padawan</h1>
            <img src="https://i.pinimg.com/originals/c1/32/45/c13245e201c5d6beb42dc36ac344b609.jpg"></img>
          </div>
          <form
            className="border bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <LabelizeInput
              inputStyle={inputStyle}
              name="email"
              register={register}
              dirtyFields={dirtyFields}
              isDirty={isDirty}
              errors={errors}
              required={true}
            />
            <LabelizeInput
              inputStyle={inputStyle}
              name="mot de passe"
              register={register}
              dirtyFields={dirtyFields}
              isDirty={isDirty}
              errors={errors}
              required={true}
            />
            <input className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Accéder à la suite" />
          </form>
        </div>
      )}
    </div>
  );
};

const inputStyle = {
  inputContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
    backgroundColor: "transparent",
    zIndex: 2,
    border: "1px solid black",
  },
  padding: "0 10px",
  height: 30,
};

export default LoginContainer;
