import CustomBox from '../components/CustomBox.tsx';
import CustomColumn from '../components/CustomColumn.tsx';
import CustomFont from '../components/CustomFont.tsx';
import CustomRow from '../components/CustomRow.tsx';

function Clubs() {

	return (

		<CustomColumn $width='90%' $height='auto' $alignitems='center' $justifycontent='center' $gap='0.5rem'>
			<CustomRow $width='100%' $alignitems='center' $justifycontent='flex-start'>
				<CustomFont $color='black' $font='1rem' $fontweight='bold'>동아리 활동</CustomFont>
			</CustomRow>
			<CustomBox $width='100%' $height='auto' $padding='1rem' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
				$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
				<CustomFont $color='black' $font='0.8rem'>2022.09~2023.03 GDSC HUFS</CustomFont>
				<CustomFont $color='black' $font='0.8rem'>2023.01~2023.12 LikeLoon 11th</CustomFont>
				<CustomFont $color='black' $font='0.8rem'>2023.03~2023.07 SOPT 32th Android</CustomFont>
				<CustomFont $color='black' $font='0.8rem'>2023.03~2023.07 Gnuvil</CustomFont>
				<CustomFont $color='black' $font='0.8rem'>2024.01~2024.12 LikeLion 12th</CustomFont>
				<CustomFont $color='black' $font='0.8rem'>2024.09~2024.12 UMC 7th</CustomFont>
			</CustomBox>
		</CustomColumn>
	)
}

export default Clubs
