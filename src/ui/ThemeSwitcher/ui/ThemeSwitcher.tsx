import { ToggleButton, ToggleButtonGroup, useColorScheme } from '@mui/material'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

export const ThemeSwitcher = () => {
  const { mode, setMode } = useColorScheme()

  if (!mode) {
    return null
  }

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    value: 'light' | 'dark' | 'system',
  ) => {
    setMode(value)
  }

  return (
    <ToggleButtonGroup
      onChange={handleChange}
      color={'primary'}
      value={mode}
      exclusive
    >
      <ToggleButton value={'system'}>
        <SettingsBrightnessIcon />
      </ToggleButton>
      <ToggleButton value={'light'}>
        <LightModeIcon />
      </ToggleButton>
      <ToggleButton value={'dark'}>
        <DarkModeIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
