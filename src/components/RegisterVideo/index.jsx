import { useState } from 'react';
import { StyledRegisterVideo } from './styles';

function useForm(props) {
  const [values, setValues] = useState(props.initialValues);

  return {
    values,
    handleChange: (event) => {
      const value = event.target.value;
      const name = event.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm: () => {
      setValues({});
    },
  };
}

export default function RegisterVideo() {
  const [formVisivel, setFormVisivel] = useState(false);
  const formCadastro = useForm({
    initialValues: { titulo: 'Frost punk', url: 'https://youtube.com/...' },
  });
  return (
    <StyledRegisterVideo>
      <button className='add-video' onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(formCadastro.values);
            formCadastro.clearForm();
            setFormVisivel(false);
          }}
        >
          <div>
            <button
              type='button'
              className='close-modal'
              onClick={() => setFormVisivel(false)}
            >
              X
            </button>
            <input
              type='text'
              name='titulo'
              placeholder='Título do vídeo'
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              type='url'
              name='url'
              placeholder='URL'
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type='submit'>Cadastrar</button>
          </div>
        </form>
      ) : null}
    </StyledRegisterVideo>
  );
}
