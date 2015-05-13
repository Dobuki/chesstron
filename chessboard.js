var ChessBoard = React.createClass({      
    render: function() {
        var br = [[<tr>[<td></td><td></td>]</tr>],[<tr><td></td><td></td></tr>]];
        var str = this.props.layout.split("\n").join("");
        var table = [];

        table.push(<tr><th/>{"ABCDEFGH".split("").map(function(letter){return <th style={{textAlign:'center',width:"4%",height:"4%"}}>{letter}</th>;})}</tr>);

        for(var row=0;row<8;row++) {
            var line = [];
            for(var col=0;col<8;col++) {
                var piece = getPieceURL(str.charAt(col + row*8));

                var cellID = String.fromCharCode("A".charCodeAt(0)+col)+(row+1);
                var style = {
                    width:"11.5%",
                    height:"11.5%",
                    backgroundImage:(row+col)%2==1?"url(img/darkcell.png)":"url(img/lightcell.png)",
                    backgroundSize:"100% 100%",
                    textAlign:"center"
                };
                var img = <img width="85%" height="85%" src={piece}/>;
                line.push(<td valign='middle' align='center' key={cellID} id={cellID} style={style}>{img}</td>);
            }
            table.push(<tr><th style={{textAlign:'center',width:"4%"}}>{row+1}</th>{line}<th style={{width:"4%"}}/></tr>);
        }

        table.push(<tr><th/>{new Array(8).map(function(){return <td style={{height:"4%"}}></td>})}<th/></tr>);

        var tableStyle = {
            backgroundColor:"black",
            color:"silver",
            fontFamily:"Architects Daughter"
        };
        return (<table width="100%" height="100%" style={tableStyle}>{table}</table>);
    }
});
