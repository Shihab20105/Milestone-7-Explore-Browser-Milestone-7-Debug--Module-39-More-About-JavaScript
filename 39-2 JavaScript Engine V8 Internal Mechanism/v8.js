/*                          39-2 JavaScript Engine V8 Internal mechanism */ 


/* 
JavaScript V8 Internal Mechanism

                            JavaScript Source Code
                                    |
                    ________________|
                    |
                    |
                  Parser
                    |
                    |_______________
                                   |
                                   |
                              Abstract Syntax Tree
                                    |
                 ___________________| 
                |
                |
       Interpreter Ignition------------------------->Compiler TurboFan
                |                                           |
                |                                           |
            Bytecode<--------------------------------Optimized Machine Code
_____________________________________________________________________________________________


                                                    |     Parsing                           |
                                                    |         |                             |
                                                    |        AST                            |
                                                    | (Abstract syntax Tree)                |
                                                    |         |--------------------Ignition |
JS Source code--------->Chrome V8 engine----------> |     Byte code                         |
                                                    |         |--------------------Turbofan |
                                                    |     Machine Code                      |
                                                    |         |                             |
                                                    |  Code runs on the CPU                 |

*/