import { Button, Card, FormHelperText, IconButton, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink, useNavigate } from "react-router-dom";
import doAxios, { baseUrl } from "../../Api/api";
import AlertDialog from "../../components/alertDialog";
import { useDispatch} from "react-redux";
import { setUserAuthorisation, setUserDetail } from "../../redux/reducers/userReducer";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Login = () => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const {
    register,
    handleSubmit,
    setErrors,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const navigate = useNavigate();

  const [alert, setAlert] = useState({ open: false, message: "", severity: "" });
const dispatch = useDispatch()

  const onSubmit = (data) => {
    setAlert((prev) => ({ ...prev, open: false, message: "", severity: "" }));

    setIsSubmitting(true);
    const payload = loginData;
    const success = (data) => {
      setAlert((prev) => ({ ...prev, open: true, message: data?.data.message, severity: "success" }));
      setTimeout(() => {
        handleAuthorisation(data?.data.accessToken);
      }, [1000]);
    };
    const error = (data) => {
      setAlert((prev) => ({ ...prev, open: true, severity: "error", message: data?.response?.data.message }));
      setIsSubmitting(false);
    };
    doAxios(baseUrl + "user/login", "post", payload, success, error);
  };

  const handleAuthorisation = (value) => {
    setIsSubmitting(true);
    const payload = { token: value };
    const success = (data) => {
      setAlert((prev) => ({ ...prev, open: true, message: data?.data.message, severity: "success" }));
      setIsSubmitting(false);
dispatch(setUserDetail(data?.data.user))
dispatch(setUserAuthorisation(data?.data.role))
      setTimeout(() => {
        navigate("/home");
      }, [1000]);
    };
    const error = (data) => {
      setAlert((prev) => ({ ...prev, open: true, severity: "error", message: data?.response?.data.message }));
      setIsSubmitting(false);
      setTimeout(() => {
        navigate("/authorisation");
      }, [1000]);
    };
    doAxios(baseUrl + "user/roleAuthorization", "post", payload, success, error);
  };
  return (
    <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} sx={{ width: "100%", height: "100vh" , backgroundColor:"#F4F9F9"}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={"column"} sx={{ boxSizing: "border-box",borderRadius:"10px",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "20px", backgroundColor: "white" }} spacing={2} alignItems={"center"}>
        <Stack direction={"column"} spacing={0} alignItems={"center"}>
        <Typography variant="h5">Welcome back</Typography>
        <Typography variant="caption">Please enter your details to sign in</Typography>
        </Stack>
          <Stack direction={"column"} spacing={0} alignItems={"flex-start"}>
            <Typography variant="caption">Email</Typography>
            <TextField
              {...register(
                "email"
                // , {required : "Email is required", validate : (value)=> !value.includes("@") ? "Please enter a valid email" : true}
              )}
              type="text"
              size="small"
              onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
            />
            {errors.email && <FormHelperText sx={{ color: "red" }}>{errors.email.message}</FormHelperText>}
          </Stack>

          <Stack direction={"column"} spacing={0} alignItems={"flex-start"}>
            <Typography variant="caption">Passsword</Typography>
            <TextField
              {...register(
                "password"
                // , {required : "Password is required", minLength : {
                // value : 9,
                // message : "Min 6 chars"
                // }}
              )}
              type="password"
              size="small"
              onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
            />
            {errors.password && <FormHelperText sx={{ color: "red" }}>{errors.password.message}</FormHelperText>}
          </Stack>
          <Button type="submit" variant="contained" disabled={isSubmitting} sx={{width:"100%"}} >
            {isSubmitting ? "Loading" : "Submit"}
          </Button>
          <Typography>or</Typography>
          <Stack direction="row" spacing={3}>
<Card ><IconButton>
  <GoogleIcon color="primary"/></IconButton></Card>
  <Card><IconButton>
  <FacebookIcon color="primary"/></IconButton></Card>
  <Card><IconButton>
  <LinkedInIcon color="primary"/></IconButton></Card>
          </Stack>
          <Stack direction="row" spacing={"4px"} alignItems="center" justifyContent={"center"}>
            <Typography variant="caption">New User?</Typography>
            <Typography variant="caption" color="blue">
              <NavLink to="/register">Register</NavLink>
            </Typography>
          </Stack>
        </Stack>
      </form>
      <AlertDialog state={alert?.open} severity={alert?.severity} message={alert?.message} />
    </Stack>
  );
};

export default Login;
