import { useEffect } from 'react'
import { CartState } from "../context/Context";
import { BsFillBookmarkCheckFill, BsCashCoin, BsStackOverflow, BsStack }
  from 'react-icons/bs'
import { BarChart, Bar, XAxis, PieChart, Pie, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';

const DashboardHome = () => {

  const {
    dashboardState: { earnings, orders, balance, totalsales },
    dashboardDispatch,
  } = CartState();
  useEffect(() => {
    dashboardDispatch({
      type: "REPORTS"
    });
  }, [])
  const data = [
    {
      name: 'Jan',
      sales: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      sales: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      sales: 7600,
      amt: 2290,
    },
    {
      name: 'Apr',
      sales: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      sales: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      sales: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      sales: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      sales: 9860,
      amt: 2100,
    },
    {
      name: 'Sep',
      sales: 3440,

    },
    {
      name: 'Oct',
      sales: 4300,

    },
    {
      name: 'Nov',
      sales: 5460,
      amt: 5000,
    },
    {
      name: 'Dec',
      sales: 4300,
      amt: 2100,
    },
  ];
  return (
    <main className='main-container'>
      <div className='main-cards'>
        <div className='item-card'>
          <div className='card-inner'>
            <h3>EARNING</h3>
            <BsCashCoin className='card_icon' />
          </div>
          <h1>£{earnings}k</h1>
          <h3><span>&#8593;</span> 37.8% this month</h3>
        </div>
        <div className='item-card'>
          <div className='card-inner'>
            <h3>ORDERS</h3>
            <BsFillBookmarkCheckFill className='card_icon' />
          </div>
          <h1>£{orders}k</h1>
          <h3><span>&#8595;</span> 37.8% this month</h3>
        </div>
        <div className='item-card'>
          <div className='card-inner'>
            <h3>BALANCE</h3>
            <BsStackOverflow className='card_icon' />
          </div>
          <h1>£{balance}k</h1>
          <h3><span>&#8595;</span> 2% this month</h3>
        </div>
        <div className='item-card'>
          <div className='card-inner'>
            <h3>TOTAL SALES</h3>
            <BsStack className='card_icon' />
          </div>
          <h1>£{totalsales}k</h1>
          <h3><span>&#8593;</span> 37.8% this month</h3>
        </div>
      </div>

      <div className='charts-section1'>

        <ResponsiveContainer width="100%" height="100%">
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
            <Bar dataKey="sales" fill="#8884d8" />

          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
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
            <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />

          </LineChart>
        </ResponsiveContainer>

      </div>
      <div className='charts-section2'>
      <ResponsiveContainer width="100%" height="100%">
          <PieChart width={500} height={300}>
            <Pie
              dataKey="sales"
              isAnimationActive={false}
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </main>
  )
}

export default DashboardHome