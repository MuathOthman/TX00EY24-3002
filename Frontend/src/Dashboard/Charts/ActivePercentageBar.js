import { ResponsiveRadar } from '@nivo/radar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    "taste": "DATE1",
    "chardonay": 35,
    "carmenere": 41,
    "syrah": 59
  },
  {
    "taste": "Date2",
    "chardonay": 67,
    "carmenere": 41,
    "syrah": 92
  },
  {
    "taste": "Date3",
    "chardonay": 35,
    "carmenere": 72,
    "syrah": 27
  },
  {
    "taste": "Date4",
    "chardonay": 21,
    "carmenere": 87,
    "syrah": 99
  },
  {
    "taste": "Date5",
    "chardonay": 104,
    "carmenere": 84,
    "syrah": 95
  }
]
const MyResponsiveRadar = () => (
    <div style={{ width: '600px', height: '39vh', marginTop: '-70px', marginLeft: "-30px" }}>
    <ResponsiveRadar
        data={data}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        motionConfig="wobbly"
    />
    </div>
)

export default MyResponsiveRadar;
