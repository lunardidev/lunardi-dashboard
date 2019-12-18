import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80");

    header{
        margin: 0 auto;
        display:flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        background:#fff;
        width: 470px;
        padding:40px;
        border-radius:6px;
        box-shadow: 0 10px 20px rgba(3,27,78,.1);

        h2{
            font-weight:500;
            font-size:26px;
            margin-bottom: 10px
        }

        input{
            background: #fcfcfc;
            border: 1px solid #e7e7e7;
            padding: 15px;
            border-radius: 6px;
            font-size: 14px;
            width:350px;
            height:40px;
            margin:3px;
        }

        button{
            width:350px;
            height:40px;
            color: white;
            background: #666699;
            border: 0;
            font-weight: 600;
            font-size: 18px;
            text-align: center;
            cursor: pointer;
            -webkit-appearance: none;
            border-radius: 6px;
            margin:3px;
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
        }

        button:hover {
            background-color: #3d3d5c;
        }

        .signin-alternative{
            margin-top:40px;
            font-weight: 600;
            font-size: 16px;
        }

        .signin-buttons{
            display:flex;
            justify-content:space-between;
            margin-top:16px;

            a{
                background: #f0f0f5;
                border: 1px solid rgba(209, 209, 224,.5);
                border-radius: 3px;
                color: #031b4e;
                text-decoration: none;
                padding-left: 50px;
                padding-right: 50px;
                position: relative;
                height:40px;
                line-height:38px;
                margin:3px;
                font-weight: 600;
                font-size: 14px;
                text-align:center;
                -webkit-transition-duration: 0.4s; /* Safari */
                transition-duration: 0.4s;
            }

            a:hover {
            background-color: #e0e0eb;
        }

            svg{
                left: 16px;
                position: absolute;
                top: 18%;
            }

        }
    }
`;