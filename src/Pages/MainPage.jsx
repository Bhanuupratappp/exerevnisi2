import React from 'react'
import styled from 'styled-components'

export const MainPage = () => {
  return (
    <DIV>
        <div className='container'>
               <div className='MainText'>
               <h1>Study with personal Care.</h1>
               <p>For students of class 10th, 11th & 12th and Preparing for  Competitive exams</p>
               <button className='btn'>Launching Soon</button>
               </div>

               <div className='middlesection'>
                  <div className='midsec'>
                    
                    <div className='text'>
                    <h1>Unlimited Personalized Learning Sessions, Just for You!</h1>
                    <p>Experience tailor-made learning sessions for every subject and topic. Our innovative AI algorithm crafts batches of 20 questions, each accompanied by instant feedback and solutions - it's like chatting with your personal tutor!</p>
                    </div>
                    <div className='img'>
                    <img src="https://framerusercontent.com/images/h5B9HiGEB9XfCLTOM8bd7yQivs.jpg" alt="" />
                    </div>
                  </div>

                 <div className='midsec'>
                    <div className='img'>
                    <img src="https://framerusercontent.com/images/vRCu8B3xwdJfULPt8tgp4LFQDY.jpg" alt="" />
                    </div>
                    
                    <div className='text'>
                    <h1>Assess and Improve with Custom Assessment Sessions</h1>
                    <p>After every 10 personalized learning sessions, STUDYtable crafts an assessment session just for you. Targeting your most challenging concepts, you can take as many assessments as you need to achieve mastery!</p>
                    </div>
                  
                  </div>
                 
                  <div className='midsec'>
                  
                    <div className='text'>
                    <h1>Worry Less, Accomplish More with special Management in your study.</h1>
                    <p>Our AI assistant helps track your progress and curates study plans for competitive exams at every stage of your journey. We monitor your readiness for each exam individually, guiding you toward success!</p>
                    </div>
                    <div className='img'>
                    <img src="https://framerusercontent.com/images/wEsLyktftaLKILSEstvC8DBj5g.jpg" alt="" />
                    </div>
                  </div>
               </div>

               <div className='bottomsec'>
                <h1>Crafted Just For You.</h1>
                <button className='btn'>Launching Soon</button>
               </div>

               <footer className='footer'>
                  <div className='first'>
                    <p>Learning</p>
                    <p>Assessment</p>
                    <p>Management</p>
                  </div>
                  <div className='second'>
                    <p><a target='_blank' href="http://exerevnisi.com/#/about">About us</a></p>
                    <p><a target='_blank' href="http://exerevnisi.com/">Exerevinisi</a></p>
                  </div>
               </footer>
        </div>
    </DIV>
  )
}

const DIV = styled.div`
.container{
    width: 100%;
}
     .MainText{
        /* border: 2px solid red; */
        height: 780px;
        font-size: 24.5px;
        padding-top: 250px;
        color: #333333;
        letter-spacing: -2px;
       
       text-align: center;
    }
    

    .MainText p{
        font-size: 12px;
        letter-spacing: -0.5px;
        color: #8f8c88;
        margin-top: -10px;
        margin-bottom: 20px;
    }
    .btn{
        padding: 15px;
        color: white;
        background-color: black;
        border: none;
        border-radius: 10px;
        font-weight: 700;
        font-size: 15px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .middlesection{
       width: 100%;
       margin: auto;
       filter: grayscale(100%); 
      -webkit-filter: grayscale(100%); 
    }
    .midsec{
        width: 80%;
        display: flex;
        justify-content: center;
        gap: 70px;
        
        margin: auto;
        margin-top: 20px;
    }
    .bottomsec{
       margin: 350px 0px 350px 0px;

    }
    .bottomsec h1{
        color: #333333;
        
        font-size:41px;
        font-weight: 900;
    }
    .img{
       
       
       height: 470px;
       width: 40%;  
       overflow: hidden;
       object-fit: cover;
       border-radius: 40px;
        
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

        
    }
    .text{
        display: grid;
        width: 40%;
        text-align: left;
        align-content: center;
       
        box-sizing: border-box;
        overflow: hidden;
        padding: 30px;
       
    }
    .text h1{
        margin: 0;
        color: #333333;
        
        font-size:41px;
        font-weight: 900;
         }

         .text p{
        margin: 0;
        margin-top: 10px;
        
        letter-spacing: -1.0px;
        font-size:20px;
        line-height: 30px;
        color: #8a8783;
         }

         .footer{
            background-color: black;
            width: 100%;
            height: 300px;
            color: white;
            display: flex;
            justify-content: space-around;
         }
         .first{
            text-align: left;
         }
         .second{
            font-weight: bold;
            text-align: left;
         }
         a{
            text-decoration: none;
            color: white;
         }

         @media only screen and (max-width: 799px) {
    .footer{
        display: inline-block;
    }
    .midsec{
        display: grid;
        width: 100%;
        text-align: center;
        
        justify-content: center;
       
        
        
       

    }
    .text{
        display: grid;
        width: 80%;
        margin: auto;
        text-align: left;
        align-content: center;
       
        box-sizing: border-box;
        overflow: hidden;
        padding: 30px;
       
    }
    .img{
       
       order: -1;
       height: 470px;
       width:80%;  
       margin: auto;
       overflow: hidden;
       object-fit: cover;
       border-radius: 40px;
        
    }
}
`