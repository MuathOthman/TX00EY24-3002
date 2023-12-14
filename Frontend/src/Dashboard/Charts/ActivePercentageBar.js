import { ResponsiveRadar } from '@nivo/radar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    "taste": "Residential",
    "Residential": 35,
    "Industrial": 54,
    "Commercial": 65
    },
{
    "taste": "Commercial",
    "Residential": 15,
    "Industrial": 54,
    "Commercial": 25
    },
    {
    "taste": "Industrial",
    "Residential": 35,
    "Industrial": 84,
    "Commercial": 25
    },
]
const MyResponsiveRadar = () => (
    <div style={{ width: '600px', height: '39vh', marginTop: '-70px', marginLeft: "-30px" }}>
    <ResponsiveRadar
        data={data}
        keys={[ 'Residential', 'Industrial', 'Commercial' ]}
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
