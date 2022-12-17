import { FileValidated } from '@dropzone-ui/react'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Box, Button, Container, Step, StepLabel, Stepper } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAppState } from '../components/AppContext'
import FileUpload from '../components/FileUpload'
import Processing from '../components/Processing'

const steps = ['Select File', 'Processing']

export default function Home (): JSX.Element {
  const [activeStep, setActiveStep] = useState(0)
  const [files, setFiles] = useState<FileValidated[]>([])
  const [appState] = useAppState()
  const router = useRouter()

  const getCurrentComponent = (): JSX.Element | undefined => {
    switch (activeStep) {
      case 0:
        return (
          <FileUpload
            files={files}
            onFilesChange={setFiles}
          />
        )
      case 1:
        return (
          <Processing files={files.map(f => f.file)} />
        )
    }
  }

  return (
    <>
      <Head>
        <title>ORCA Year in Transit</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box
        component='main'
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth='sm'>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {}
              const labelProps = {}
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              )
            })}
          </Stepper>
          {getCurrentComponent()}
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {
              activeStep > 0 &&
                <Button
                  sx={{ ml: 'auto' }}
                  variant='contained'
                  startIcon={<ArrowBack />}
                  onClick={() => { setActiveStep(activeStep - 1) }}
                >
                  Back
                </Button>
            }
            <div style={{ flexGrow: 1 }} />
            {
              activeStep !== 1
                ? (
                  <Button
                    variant='contained'
                    endIcon={<ArrowForward />}
                    disabled={!files.length}
                    onClick={() => { setActiveStep(activeStep + 1) }}
                  >
                    Forward
                  </Button>
                  )
                : (
                  <Button
                    color='success'
                    variant='contained'
                    endIcon={<ArrowForward />}
                    disabled={!appState.processed}
                    onClick={() => { void router.push('/wrapped') }}
                  >
                    View ORCA Wrapped
                  </Button>
                  )
            }
          </Box>
        </Container>
      </Box>
    </>
  )
}
