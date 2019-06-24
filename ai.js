var AI = {
    name: 'AI',
    logic: (game) => {
        if (game.state[4] == ''){
            game.makeMove(4)
        } 
        
        //corner wins
        else if(game.state[0] == 'O' && game.state[1] == 'O' && game.state[2] == '' || game.state[6] == 'O' && game.state[4] == 'O' && game.state[2] == ''||  game.state[5] == 'O' && game.state[8] == 'O' && game.state[2] == '' ) {
            game.makeMove(2)
        } else if(game.state[2] == 'O' && game.state[1] == 'O' && game.state[0] == '' || game.state[8] == 'O' && game.state[4] == 'O' && game.state[0] == '' ||  game.state[3] == 'O' && game.state[6] == 'O' && game.state[0] == '' ) {
            game.makeMove(0)
        } else if(game.state[0] == 'O' && game.state[3] == 'O' && game.state[6] == '' || game.state[4] == 'O' && game.state[2] == 'O' && game.state[0] == '' ||  game.state[7] == 'O' && game.state[8] == 'O' && game.state[0] == '' ) {
            game.makeMove(6)
        } else if(game.state[2] == 'O' && game.state[5] == 'O' && game.state[8] == ''  || game.state[0] == 'O' && game.state[4] == 'O'  && game.state[8] == ''  ||  game.state[6] == 'O' && game.state[7] == 'O' && game.state[8] == ''  ) {
            game.makeMove(8)
        } 
        //sides win
        else if(game.state[7] == 'O' && game.state[4] == 'O'  && game.state[1] == '' ) {
            game.makeMove(1)
        } else if(game.state[1] == 'O' && game.state[4] == 'O'  && game.state[7] == '' ) {
            game.makeMove(7)
        }

        else if(game.state[3] == 'O' && game.state[4] == 'O'  && game.state[5] == '' ) {
            game.makeMove(5)
        } else if(game.state[5] == 'O' && game.state[4] == 'O'  && game.state[3] == '' ) {
            game.makeMove(3)
        }
        

        //center win
        else if(game.state[1] == 'O' && game.state[7] == 'O'  && game.state[4] == ''  || game.state[5] == 'O' && game.state[3] == 'O' && game.state[4] == '' ) {
            game.makeMove(4)
        }





        //corner loss block
        else if(game.state[0] == 'X' && game.state[1] == 'X'  && game.state[2] == '' || game.state[6] == 'X' && game.state[4] == 'X'  && game.state[2] == '' ||  game.state[5] == 'X' && game.state[8] == 'X'  && game.state[2] == ''   ) {
            game.makeMove(2)
        } else if(game.state[2] == 'X' && game.state[1] == 'X'  && game.state[0] == '' || game.state[8] == 'X' && game.state[4] == 'X'  && game.state[0] == '' ||  game.state[3] == 'X' && game.state[6] == 'X' && game.state[0] == ''  ) {
            game.makeMove(0)
        } else if(game.state[0] == 'X' && game.state[3] == 'X'  && game.state[6] == '' || game.state[4] == 'X' && game.state[2] == 'X'  && game.state[6] == ''  ||  game.state[7] == 'X' && game.state[8] == 'X'  && game.state[6] == ''  ) {
            game.makeMove(6)
        } else if(game.state[2] == 'X' && game.state[5] == 'X' && game.state[8] == ''  || game.state[0] == 'X' && game.state[4] == 'X' && game.state[8] == ''  ||  game.state[6] == 'X' && game.state[7] == 'X' && game.state[8] == ''   ) {
            game.makeMove(8)
        } 
        //sides loss block
        else if(game.state[7] == 'X' && game.state[4] == 'X' && game.state[1] == '' || game.state[0] == 'X' && game.state[2] == 'X' && game.state[1] == '') {
            game.makeMove(1)
        } else if(game.state[1] == 'X' && game.state[4] == 'X' && game.state[7] == '' || game.state[6] == 'X' && game.state[8] == 'X' && game.state[7] == '') {
            game.makeMove(7)
        }

        else if(game.state[3] == 'X' && game.state[4] == 'X' && game.state[5] == '' || game.state[2] == 'X' && game.state[8] == 'X' && game.state[5] == '') {
            game.makeMove(5)
        } else if(game.state[5] == 'X' && game.state[4] == 'X' && game.state[3] == '' || game.state[6] == 'X' && game.state[0] == 'X' && game.state[3] == '') {
            game.makeMove(3)
        }
        

        //center loss block
        else if(game.state[1] == 'X' && game.state[7] == 'X'  && game.state[4] == ''  || game.state[5] == 'X' && game.state[3] == 'X' && game.state[4] == '' ) {
            game.makeMove(4)
        }


        //second move
        else if(game.state[0] == '') {
            game.makeMove(0)
        } else if(game.state[2] == '') {
            game.makeMove(2)
        } else if(game.state[1] == '') {
            game.makeMove(1)
        } else if(game.state[3] == '') {
            game.makeMove(3)
        } else if(game.state[4] == '') {
            game.makeMove(4)
        } else if(game.state[5] == '') {
            game.makeMove(5)
        } else if(game.state[6] == '') {
            game.makeMove(6)
        } else if(game.state[7] == '') {
            game.makeMove(7)
        } else if(game.state[8] == '') {
            game.makeMove(8)
        } 

    }
}