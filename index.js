const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

//criação da rota
const route = "/api/services/produto";

//verbo get 
app.get(`${route}/listar`,(req,res)=>{
res.status(200).send({output:[

{
 id:500,
 nome:"Smartfone",
 descricao:"Smartfone Samsung",
 categoria:"Telefonia",
 preco:1500.00,
 msg:[
	{
	titulo:"Produto bom",
	autor:"Helena",
	mensagem:"Gostei"
	},
      {
      titulo:"Produto ruim", 
      autor:"Wagner",	
      mensagem:"Material Fragil"
      }
 ]
},
{
 id:501,
 nome:"Smartfone",
 descricao:"Smartfone Motorola",
 categoria:"Telefonia",
 preco:799.00,
 msg:[
	{
	titulo:"Produto horrivel",
	autor:"Jorge",
	mensagem:"Produto muito RUIM"
	},
      {
      titulo:"Produto ruim", 
      autor:"Matheus",	
      mensagem:"Material Fragil"
      }
 ]
},
{
 id:502,
 nome:"Smartfone",
 descricao:"Smartfone Apple",
 categoria:"Telefonia",
 preco:10599.00,
 msg:[
	{
	titulo:"Produto bom",
	autor:"Thais",
	mensagem:"Otima qualidade"
	},
      {
      titulo:"Produto ruim", 
      autor:"Paulo",	
      mensagem:"Acaba Bateria rapido"
      }
 ]
},
{
 id:503,
 nome:"Smartfone",
 descricao:"Smartfone Xiaomi",
 categoria:"Telefonia",
 preco:4000.00,
 msg:[
	{
	titulo:"Produto bom",
	autor:"Antonio",
	mensagem:"Produto de qualidade"
	},
      {
      titulo:"Produto ruim", 
      autor:"Pedro",	
      mensagem:"Produto de origem duvidosa"
      }
 ]
},

]});
});

app.listen(4000,()=>console.log("on-line"));

