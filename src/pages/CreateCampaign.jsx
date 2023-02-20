import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers'
import { FormField, Loader } from '../components'
import { useStateContext } from '../context'
import { Coins } from 'phosphor-react'
import { checkIfImage } from '../utils'
import styled from 'styled-components'

const StyledCreateCampaign = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 150px 0;

    .formulario {
        width: 500px;

        .header-formulario {
            margin-bottom: 40px;

            p {
                margin-top: 10px;
                opacity: .65;
            }
        }

        .ad-found {
            margin: 50px 0;
            padding: 50px;
            border-radius: var(--border-md);
            background: var(--green);

            svg {
                margin-bottom: 25px;
            }
        }

        .button-created {
            width: 100%;
            padding: 30px;
            background: var(--black-0);
            color: var(--white-0);
            border-radius: var(--border-md);
            font-weight: 700;
            margin-top: 25px;
        }
    }
`

const CreateCampaign = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { createCampaign } = useStateContext();
    const [form, setForm] = useState({
        name: '',
        title: '',
        category: '',
        description: '',
        target: '',
        deadline: '',
        image: ''
    });

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        checkIfImage(form.image, async (exists) => {
            if (exists) {
                setIsLoading(true)
                await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18) })
                setIsLoading(false);
                navigate('/');
            } else {
                alert('Proporcione una URL de imagen válida')
                setForm({ ...form, image: '' });
            }
        })
    }

    return (
        <StyledCreateCampaign>
            {isLoading && <Loader />}
            <div className='formulario'>
                <div className='header-formulario'>
                    <h1>Empezar una campaña</h1>
                    <p>Crea un nuevo proyecto rápido y seguro</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <FormField
                        labelName="Nombre"
                        placeholder="Escribe tu nombre"
                        inputType="text"
                        value={form.name}
                        handleChange={(e) => handleFormFieldChange('name', e)}
                    />

                    <FormField
                        labelName="Título de la camapaña"
                        placeholder="Escribe un título"
                        inputType="text"
                        value={form.title}
                        handleChange={(e) => handleFormFieldChange('title', e)}
                    />

                    <FormField
                        labelName="Categoría"
                        placeholder="Escribe una categoría"
                        inputType="text"
                        value={form.category}
                        handleChange={(e) => handleFormFieldChange('category', e)}
                    />

                    <FormField
                        labelName="Descripción"
                        placeholder="Escribe una breve descripción"
                        isTextArea
                        value={form.description}
                        handleChange={(e) => handleFormFieldChange('description', e)}
                    />

                    <div className="ad-found">
                        <Coins size={50} />
                        <h1>Recibirás el 100% de la cantidad recaudada</h1>
                    </div>

                    <FormField
                        labelName="Meta"
                        placeholder="ETH 0.50"
                        inputType="text"
                        value={form.target}
                        handleChange={(e) => handleFormFieldChange('target', e)}
                    />
                    
                    <FormField
                        labelName="Fecha final"
                        placeholder="Fecha final"
                        inputType="date"
                        value={form.deadline}
                        handleChange={(e) => handleFormFieldChange('deadline', e)}
                    />

                    <FormField
                        labelName="Imagen de la campaña"
                        placeholder="Coloque la URL de la imagen de su campaña"
                        inputType="url"
                        value={form.image}
                        handleChange={(e) => handleFormFieldChange('image', e)}
                    />

                    <button className="button-created" type='submit'>
                        Crear nueva campaña
                    </button>
                </form>
            </div>
        </StyledCreateCampaign>
    )
}

export default CreateCampaign