import CustomBox from '../components/CustomBox.tsx';
import CustomColumn from '../components/CustomColumn.tsx';
import CustomFont from '../components/CustomFont.tsx';
import CustomRow from '../components/CustomRow.tsx';

function JobAndTool() {

	return (
		<>
			<CustomColumn $width='90%' $height='auto' $alignitems='center' $justifycontent='center' $gap='0.5rem'>
				<CustomRow $width='100%' $alignitems='center' $justifycontent='flex-start'>
					<CustomFont $color='black' $font='1rem' $fontweight='bold'>희망 직무</CustomFont>
				</CustomRow>
				<CustomBox $width='100%' $height='auto' $padding='1rem' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
					$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
					<CustomFont $color='black' $font='0.8rem'>web/app Frontend 개발 직무</CustomFont>
					<CustomFont $color='black' $font='0.8rem'>PM (Project Manager) 직무</CustomFont>
				</CustomBox>
			</CustomColumn>

			<CustomColumn $width='90%' $height='auto' $alignitems='center' $justifycontent='center' $gap='0.5rem'>
				<CustomRow $width='100%' $alignitems='center' $justifycontent='flex-start'>
					<CustomFont $color='black' $font='1rem' $fontweight='bold'>언어 / 프레임워크 / Tool</CustomFont>
				</CustomRow>
				<CustomBox $width='100%' $height='auto' $padding='1rem' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
					$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
					<CustomRow $width='100%' $alignitems='flex-start' $justifycontent='space-between'>
						<CustomFont $color='black' $font='0.8rem' $fontweight='bold'>언어</CustomFont>
						<CustomColumn $width='70%' $alignitems='flex-start' $justifycontent='center' $gap='0.5rem'>
							<CustomFont $color='black' $font='0.8rem'>JavaScript</CustomFont>
							<CustomFont $color='black' $font='0.8rem'>TypeScript</CustomFont>
							<CustomFont $color='black' $font='0.8rem'>Python, Java, Dart</CustomFont>
						</CustomColumn>
					</CustomRow>
					<CustomRow $width='100%' $alignitems='flex-start' $justifycontent='space-between'>
						<CustomFont $color='black' $font='0.8rem' $fontweight='bold'>프레임워크</CustomFont>
						<CustomColumn $width='70%' $alignitems='flex-start' $justifycontent='center' $gap='0.5rem'>
							<CustomFont $color='black' $font='0.8rem'>React + Vite</CustomFont>
							<CustomFont $color='black' $font='0.8rem'>Next.JS</CustomFont>
							<CustomFont $color='black' $font='0.8rem'>Andriod, Flutter, React-Native</CustomFont>
						</CustomColumn>
					</CustomRow>
					<CustomRow $width='100%' $alignitems='flex-start' $justifycontent='space-between'>
						<CustomFont $color='black' $font='0.8rem' $fontweight='bold'>Tool</CustomFont>
						<CustomColumn $width='70%' $alignitems='flex-start' $justifycontent='center' $gap='0.5rem'>
							<CustomFont $color='black' $font='0.8rem'>Figma</CustomFont>
							<CustomFont $color='black' $font='0.8rem'>Notion, Discord, Slack, Jira</CustomFont>
						</CustomColumn>
					</CustomRow>
				</CustomBox>
			</CustomColumn>
		</>
	)
}

export default JobAndTool
