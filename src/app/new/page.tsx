import { palette } from 'src/app/styles/colors';
import { RestaurantCard } from '../components/RestaurantCard';

export default function Page() {
  return (
    <div
      style={{
        color: palette['warning'],
      }}
    >
      <RestaurantCard
        image={
          // 'https://www.digitaltrends.com/wp-content/uploads/2023/05/planet-of-lana-landscape.jpg?p=1'
          '/field.png'
        }
      />
    </div>
  );
}
