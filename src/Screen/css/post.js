import {colors,fonts} from './../../theme/theme';

module.exports = `<style>
                        * {
                            color : #FFF
                        } 
                        #height-calculator {
                          margin: 0;
                          padding: 0;
                        }
                        #height-calculator {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            margin: 0;
                            padding: 0;
                        }
                        body {
                          width:100%;
                          background-color : ${colors.MainColor}
                        }
                        h2 {
                          font-size: 5em;
                          
                        }
                        p {
                          font-size: 2.5em;
                          font-weight : lighter;
                          width : 100%;
                          display : flex;
                            justify-content: center;
                            align-items: center;
                            padding-left: 10px;
                        }
                        h3 {
                          font-size: 2em
                        }
                        img {
                          border-radius : 40px
                          
                        }
                        td {
                          display: block !important;
                          width: 95% !important;
                        }
                        
                    
                        .containers {
                            width : 100%;
                            height : auto;
                            padding : 5px;
                           
                            
                        }
               </style>`

               