import React from "react"
import styled from "styled-components"

const Content = ({ children }) => {
  const StyledContent = styled.div(({ theme }) => {
    const { space } = theme
    return `
      padding: ${space.md};
    `
  })

  return <StyledContent>{children}</StyledContent>
}

export default Content
