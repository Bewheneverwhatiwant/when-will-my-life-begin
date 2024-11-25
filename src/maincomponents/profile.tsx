import CustomBox from "../components/CustomBox.tsx"
import StyledImg from "../components/StyledImg.tsx"
import CustomColumn from "../components/CustomColumn.tsx"
import CustomFont from "../components/CustomFont.tsx"
import CustomRow from "../components/CustomRow.tsx"

function Profile() {

	return (
		<>
			<StyledImg src={'myPicture.jpg'} $borderradius='50%' $width='10rem' $height='10rem' />
			<CustomFont $color='black' $font='1.3rem' $fontweight='bold'>이나영</CustomFont>

			<CustomColumn $width='90%' $height='auto' $alignitems='center' $justifycontent='center' $gap='0.5rem'>
				<CustomRow $width='100%' $alignitems='center' $justifycontent='flex-start'>
					<CustomFont $color='black' $font='1rem' $fontweight='bold'>기본 정보</CustomFont>
				</CustomRow>
				<CustomBox $width='100%' $height='auto' $padding='1rem' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
					$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
					<CustomFont $color='black' $font='0.8rem'>한국외국어대학교 글로벌캠퍼스 재학</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>독일어통번역학과, 컴퓨터공학부 이중전공</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>github : bewheneverwhatiwant</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>email : lny021102@gmail.com</CustomFont>
				</CustomBox>
			</CustomColumn>
		</>
	)
}

export default Profile
