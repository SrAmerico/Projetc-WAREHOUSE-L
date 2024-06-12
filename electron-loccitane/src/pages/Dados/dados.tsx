import { useState } from "react";
import "./style.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import SiderBar from "../../components/SiderBar/siderbar";
import { ReferenceLine , Rectangle, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


function Dados(){
    const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };


  const data = [
    {
      name: 'Jan',
      Saida: 482,
      Estoque: 518,
      amt: 1000,
    },
    {
      name: 'Fev',
      Saida: 194,
      Estoque: 806,
      amt: 1000,
    },
    {
      name: 'Mar',
      Saida: 257,
      Estoque: 743,
      amt: 1000,
    },
    {
      name: 'Abr',
      Saida: 962,
      Estoque: 38,
      amt: 1000,
    },
    {
      name: 'Mai',
      Saida: 785,
      Estoque: 215,
      amt: 1000,
    },
    {
      name: 'Jun',
      Saida: 698,
      Estoque: 302,
      amt: 1000,
    },
    {
      name: 'Jul',
      Saida: 842,
      Estoque: 158,
      amt: 1000,
    },
    {
      name: 'Ago',
      Saida: 741,
      Estoque: 259,
      amt: 1000,
    },
    {
      name: 'Set',
      Saida: 428,
      Estoque: 572,
      amt: 1000,
    },
    {
      name: 'Out',
      Saida: 985,
      Estoque: 15,
      amt: 1000,
    },
    {
      name: 'Nov',
      Saida: 871,
      Estoque: 129,
      amt: 1000,
    },
    {
      name: 'Dez',
      Saida: 400,
      Estoque: 600,
      amt: 1000,
    },
  ];

  const data2 = [
    { name: 'Group A', value: 160 },
    { name: 'Group B', value: 40 },
    { name: 'Group C', value: 800 },
    
  ];

  const data3 = [
    {
      name: 'Jan',
      Saida: 482,
      Estoque: 518,
      amt: 1000,
    },
    {
      name: 'Fev',
      Saida: 194,
      Estoque: 806,
      amt: 1000,
    },
    {
      name: 'Mar',
      Saida: 257,
      Estoque: 743,
      amt: 1000,
    },
    {
      name: 'Abr',
      Saida: 962,
      Estoque: 38,
      amt: 1000,
    },
    {
      name: 'Mai',
      Saida: 0,
      Estoque: 0,
      amt: 1000,
    },
    {
      name: 'Jun',
      Saida: 0,
      Estoque: 0,
      amt: 1000,
    },
    {
      name: 'Jul',
      Saida: 0,
      Estoque: 0,
      amt: 1000,
    },
    {
      name: 'Ago',
      Saida: 0,
      Estoque: 0,
      amt: 1000,
    },
    {
      name: 'Set',
      Saida: 0,
      Estoque: 0,
      amt: 1000,
    },
    {
      name: 'Out',
      Saida: 0,
      Estoque: 0,
      amt: 1000,
    },
    {
      name: 'Nov',
      Saida: 0,
      Estoque: 0,
      amt: 1000,
    },
    {
      name: 'Dez',
      Saida: 0,
      Estoque: 0,
      amt: 1000,
    },
  ];
  

  const COLORS = ['#005288', '#009dc4', '#8bd1ff', '#b8ddff'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const [mudarGrafico , SetMudarGrafico]= useState(false)

  function mudar(){
      SetMudarGrafico(!mudarGrafico)
  }

  return (
    <div className="divisao">
      <div className={`container1 ${menuOpen ? 'open' : 'close'}`}>
        <SiderBar click={handleClick} estado={`sliderbar ${menuOpen ? 'open' : 'close'}`} />
      </div>
      <div className={`container2 ${menuOpen ? 'open' : 'close'}`}>
        <Header />
        <div className="page">
          <div className="page2">
            <div className="secao">
              <div>
              {!mudarGrafico?
              <div className="linechartDiv">
                <span className="textLineChart">Status de Movimentação (mês)</span>
                <ResponsiveContainer width='100%' height='100%'>
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Estoque" stroke="#005288" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Saida" stroke="#009dc4" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
                :
              <div className="linechartDiv">
            <span className="textLineChart">Grafico Ano Anterior</span>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Estoque" fill="#005288" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="Saida" fill="#009dc4" activeBar={<Rectangle fill="gold" stroke="purple" />} />
              </BarChart>
              </div>}
              <div className="botaoMudarGrafico" onClick={mudar}>Mudar para {! mudarGrafico?'Bar':'Line'}</div>
              </div>
              
              <div className="piechartDiv">
              <span className="textLineChart">Status de Ocupação do Armazém</span>
                <div className="divPie">
                  <PieChart width={350} height={250}>
                  <Pie
                    data={data2}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="legendaPie">
                  <span>legenda</span>
                  <span><div className="caixaCor um"></div>Vazio</span>
                  <span><div className="caixaCor dois"></div>Bloqueado</span>
                  <span><div className="caixaCor tres"></div>Ocupado</span>
                  
                </div>
              </div>
              </div>

            </div>

            <div className="secao">

            

              <div className="linechartDiv">
                <span className="textLineChart">Grafico Meta</span>
              <BarChart
                width={500}
                height={300}
                data={data3}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={636} stroke="#585858" />
                <Bar dataKey="Estoque" fill="#005288" />
                <Bar dataKey="Saida" fill="#009dc4" />
              </BarChart>
              </div>

              <div className="infosGraficos">
                <div className="blocoInfo">Em Estoque<div>230</div></div>
                <div className="blocoInfo">Expedidos<div>700</div></div>
                <div className="blocoInfo">Urgente<div>53</div></div>
                <div className="blocoInfo">Armazenados<div>700</div></div>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </div>
  );

}

export default Dados;