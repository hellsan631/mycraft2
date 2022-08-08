import * as React from 'react'
import { useRecoilState } from 'recoil'
import { playerState } from '../../stores/Player'
import { Error404 } from './Error404'

import { UIProvider } from '../misc/UIProvider';
import { Onboard } from './Onboard'

enum Routes {
  ONBOARDING = 'onboarding',
  MAIN = 'main',
}

function useInitialRoute(): Routes {
  const [player] = useRecoilState(playerState)
  if (player.name == null) {
    return Routes.ONBOARDING
  }
  return Routes.MAIN
}

export function useRoute() {
  const intialRoute = useInitialRoute()
  const [route, setRoute] =React.useState<Routes>(intialRoute)
  return [route, setRoute]
}

function MainRouter() {
  const [route] = useRoute()
  switch (route) {
    case Routes.ONBOARDING: {
      return <Onboard />
    }
    default: {
      return <Error404 />
    }
  }
}

export function Router() {
  return (
    <UIProvider>
      <MainRouter />
    </UIProvider>
  )
}