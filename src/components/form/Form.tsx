import { useState, ChangeEvent, FormEvent } from "react";
import { countries } from "../../data/countries";
import styles from './Form.module.css'
import { SearchType } from "../../types";
import Alert from "../alert/Alert";

type FormProps = {
    fetchWeather: () => void;
}

export default function Form({fetchWeather} : FormProps) {

    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: ''
    });

    const [alert, setAlert] = useState('')

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if ( Object.values(search).includes('')) {
            setAlert('Todo los campos son obligatorios');
            return;
        }

        fetchWeather();

    }

  return (
    <form 
        onSubmit={ handleSubmit }
        className={styles.form}
    >

        {alert && <Alert>{alert}</Alert>}


        <div className={styles.field}>
            <label htmlFor="city">Ciudad:</label>
            <input 
                id="city"
                type="text"
                name="city"
                placeholder="Ingrese la ciudad"
                value={search.city}
                onChange={ handleChange }
            />
        </div>

        <div className={styles.field}>
            <label htmlFor="country">Pais:</label>
            <select 
                id="country"
                value={search.country}
                onChange={ handleChange }
                name='country'
            >
                <option value="">-- Seleccione un Pais ---</option>
                {countries.map( country => (
                    <option 
                        key={country.code} 
                        value={country.code}
                    >{country.name}</option>
                ))}
            </select>
        </div>

        <input
            className={styles.submit} 
            type="submit" 
            value="Consultar el clima" />

    </form>
  )
}
