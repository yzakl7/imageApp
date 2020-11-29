import * as React from 'react'
import { Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getHomeData } from '../../api/home'
import Card from '../../components/Card';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import ErrorScreen from '../../components/ErrorScreen';
import LoadingFullScreen from '../../components/LoadingFullScreen';
import Separator from '../../components/Separator';
import { Typography } from '../../globalStyles';
import dictionary from '../../lang/dictionary';

const { home: { TITLE } } = dictionary();
const { xl, bg } = Typography;

const renderImageList = (data) => {
  const {list} = styles;
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      onEndReached={() => {
        // here I would put a fetch more function
        // if endpoint's data were paginated
        console.log('fetch more')
      }}
      onEndReachedThreshold={0.2}
      style={list}
      renderItem={({
        item: {
          title,
          description,
          image: uri
        }
      }) => (
        <Card>
          <Image
            style={{height: 100, width: '100%'}}
            source={{uri}}
          />
          <CustomText size={bg}>{title}</CustomText>
          <Separator />
          <CustomText>{description}</CustomText>
        </Card>
      )}
      keyExtractor={item => item.id + ''}// key stractor wanted strings
    />
  )

}

const fetchElements = () => {

}

export default function Home() {
  const [isfetching, setIsfetching] = React.useState(true);
  const [listData, setListData] = React.useState([]);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    getHomeData().then(({data}) => {
      setListData(data)
      setIsfetching(false)
      setHasError(false)
    }).catch((err) => {
      setIsfetching(false)
      setHasError(true)
    })
  }, [])

  if (isfetching) return <LoadingFullScreen />
  if (hasError) return <ErrorScreen />
  return (
    <Container>
      <CustomText align="center" size={xl}>{TITLE}</CustomText>
      <Separator />
      {renderImageList(listData)}
    </Container>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 16,
  }
})