import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'
import { Flexbox, Header3, Paragraph, Spacer, StyleColors } from '../styles'
import ProgressCircle from 'react-native-progress-circle'

const styles = StyleSheet.create({
  percentageTitle: {
    color: 'black'
  }
})

const ReputationCellStyle = styled(Flexbox)`
  height: 136px;
  width: 158px;
  background-color: ${StyleColors.lightGray};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;
`

const PercentageBackground = styled(Flexbox)`
  height: 80px;
  width: 80px;
  align-items: center;
  justify-content: center;
`

const PercentageTitle = styled(Header3)`
  margin-top: 5px;
  position: absolute;
`

interface ReputationCellProps {
  title: string,
  percentage: number,
  color: string
}

const ReputationCell: FC<ReputationCellProps> = (props: ReputationCellProps) => {
  return (
    <ReputationCellStyle>
      <PercentageBackground>
        <View style={{ transform: [{ rotateZ: '180deg' }] }}>
          <ProgressCircle
            percent={props.percentage * 100}
            radius={35}
            borderWidth={12}
            color={props.color}
            shadowColor="transparent"
            bgColor={StyleColors.lightGray}
          />
        </View>
        <PercentageTitle color={props.color}>{`${props.percentage * 100}%`}</PercentageTitle>
      </PercentageBackground>
      <Header3 color={StyleColors.primary}>{props.title}</Header3>
    </ReputationCellStyle>
  )
}

export default ReputationCell
