
import "./form.css"
import useForm from "./useForm"
import Validate from "./validateInfo"

const Form = () => {

    const { handleChange, values, handleSubmit, errors } = useForm(Validate);

    return (

        <div class="man">
            <p className="sign" align="center">Sign in</p>

            <form className="form1" onSubmit={handleSubmit} >
                <input
                    className='un'
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={values.username}
                    onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
                <input className="pass" type="password" align="center" name='password' placeholder="Password"
                    value={values.password}
                    onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}

                <button className='submit' type='submit'>
                    <span>Sign up</span>
                </button>
                <p className="forgot" align="center">
                    <a href="#" > Forgot Password?</a></p>
            </form>
        </div>
    )
}

export default Form;