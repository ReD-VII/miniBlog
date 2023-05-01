import styled from "styled-components";

export const FormsConteiner = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: auto;
    /* background: red; */
    background: var(--cor-bg-form);
    margin: 50px auto;
    left: 0;
    right: 0;
    
    border-radius: 4px;

    .form_conteiner_img{
        width: 180px;
        margin: 40px auto;
    }


    form{
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 100%;
        /* background: orange; */
        padding: 0;
        padding-top: 50px;
        
        .boxes_form{
            display: flex;
            justify-content: center;
            width: 100%;
            height: calc((100% / 3) - 16px);
            /* background: blue;   */
        }
        label{
            display: flex;
            flex-direction: column;
            width: 90%;
            margin-top: 10px;

        }
        input{
            height: 35px;
        }
        .btn_forms{
            width: 200px;
            height: 40px;
            margin: 50px auto;
            
        }
    }


        
  /* Estilos para dispositivos móveis */
  @media (max-width: 768px){
    width: 100%;
    height: 100%;
    /* background: red; */
    background: var(--cor-bg-form);
    margin: 0 auto;
    left: 0;
    right: 0;
    padding: 80px 0;
    border-radius: 4px;

    form{
        height: auto;
        /* background: red; */
        padding-bottom: 50px;
    }

  }



  .erro_msg{
    position: absolute;
    bottom: 20px;
  }


`