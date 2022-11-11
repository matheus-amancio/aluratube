import { createClient } from '@supabase/supabase-js';
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

const PROJECT_URL = 'https://mqdvinxtsapgfccdkqyo.supabase.co';
const PUBLIC_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xZHZpbnh0c2FwZ2ZjY2RrcXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMDU3OTMsImV4cCI6MTk4Mzc4MTc5M30.Ln--Xht3QfZ4770cgrVDJH-wrpVvgryhPY5hT-mMnpU';
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split('v=')[1]}/hqdefault.jpg`;
}

export default function RegisterVideo() {
  const [formVisivel, setFormVisivel] = useState(false);
  const formCadastro = useForm({
    initialValues: {
      titulo: 'Frost punk',
      url: 'https://www.youtube.com/watch?v=QsqatJxAUtk',
    },
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

            supabase
              .from('video')
              .insert({
                title: formCadastro.values.titulo,
                url: formCadastro.values.url,
                thumb: getThumbnail(formCadastro.values.url),
                playlist: 'jogos',
              })
              .then((response) => {
                console.log(response);
              })
              .catch((err) => {
                console.log(err);
              });

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
