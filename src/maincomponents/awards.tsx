import CustomBox from '../components/CustomBox.tsx';
import CustomColumn from '../components/CustomColumn.tsx';
import CustomFont from '../components/CustomFont.tsx';
import CustomRow from '../components/CustomRow.tsx';

function Awards() {

	return (
		<>
			<CustomColumn $width='90%' $height='auto' $alignitems='center' $justifycontent='center' $gap='0.5rem'>
				<CustomRow $width='100%' $alignitems='center' $justifycontent='flex-start'>
					<CustomFont $color='black' $font='1rem' $fontweight='bold'>강점</CustomFont>
				</CustomRow>
				<CustomBox $width='100%' $height='auto' $padding='1rem' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
					$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
					<CustomFont $color='black' $font='0.8rem'>창의적인 아이디어를 떠올리고 논리적으로 설계할 수 있습니다.</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>다른 업무를 담당하는 사람과 의사소통하는데 뛰어나다고 생각합니다.</CustomFont>
				</CustomBox>
			</CustomColumn>

			<CustomColumn $width='90%' $height='auto' $alignitems='center' $justifycontent='center' $gap='0.5rem'>
				<CustomRow $width='100%' $alignitems='center' $justifycontent='flex-start'>
					<CustomFont $color='black' $font='1rem' $fontweight='bold'>수상 경력</CustomFont>
				</CustomRow>
				<CustomBox $width='100%' $height='auto' $padding='1rem' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
					$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
					<CustomFont $color='black' $font='0.8rem'>2023.10-11 경기메타버스 해커톤 결선진출</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>2024.04-05 LikeLion 12th 미니프로젝트 대상</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>2024.06-06 HUFSummer 교내 해커톤 우수상</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>2024.06-08 고용노동부 공모전 1차합격 (12팀/150팀)</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>2024.08-08 LikeLion 12th 중앙해커톤 교내3위</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>2024.10-11 GBT 학부 주관 AI 해커톤 대상(총장상)</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>2024.11-11 HUFSthon 해커톤 최우수상</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>2024.11-11 LikeLion 12th 연합해커톤 대상</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>2024.11-11 LikeLion 12th 연합해커톤 플렉상</CustomFont>
				</CustomBox>
			</CustomColumn>
		</>
	)
}

export default Awards
