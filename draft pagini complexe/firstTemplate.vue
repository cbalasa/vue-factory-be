<template>
  <Section :padding="false">
    <Section colorBackground="lightGrey" :height="90">
      <MainWrapper>
        <Banner
          image="baner.svg"
          parentName="first"
          :combinations="bannerCombinations"
        />
      </MainWrapper>
    </Section>
    <Section>
      <SingleAndMultiSelect :list="list" :multiselect="true" />
      <MainWrapper>
        <SubTitle
          text="INFERMEDICA’S PRODUCTS"
          color="darkgrey"
          align="start"
          textSize="sm"
        />
        <Columns>
          <template #first>
            <V-Icon icon="save" size="3x" color="primary" />
            <SubTitle text="Symptom checker" textSize="xl" />
            <Body
              text="Leading-edge preliminary diagnosis and triage app, effectively guiding patients to timely and proper level of care."
              textSize="lg"
              textAlign="left"
            />
            <Buttons
              text="Check Detais"
              size="medium"
              :rounded="true"
              :marginTop="4"
              align="start"
              type="iconOnly"
              icon="save"
            />
          </template>
          <template #second>
            <V-Icon icon="save" size="3x" color="primary" />
            <SubTitle text="Symptom checker" textSize="xl" />
            <Body
              text="Leading-edge preliminary diagnosis and triage app, effectively guiding patients to timely and proper level of care."
              textSize="lg"
              textAlign="left"
            />
            <Buttons
              text="Check Detais"
              size="medium"
              :rounded="true"
              :marginTop="4"
            />
          </template>
          <template #third>
            <V-Icon icon="save" size="3x" color="primary" />
            <SubTitle text="Symptom checker" textSize="xl" />
            <Body
              text="Leading-edge preliminary diagnosis and triage app, effectively guiding patients to timely and proper level of care."
              textSize="lg"
              textAlign="left"
            />
            <Buttons
              text="Check Detais"
              size="medium"
              :rounded="true"
              :marginTop="4"
            />
          </template>
        </Columns>
      </MainWrapper>
    </Section>
    <Section>
      <MainWrapper>
        <Columns>
          <template #first>
            <SubTitle text="In a nutshell" textSize="4xl" />
            <Body
              text="Infermedica helps insurance, healthcare and pharmaceutical companies increase efficiency, improve patient flow, and reduce costs."
              textSize="lg"
              textAlign="justify"
              fontWeight="extralight"
              class="font"
            />
          </template>
          <template #second>
            <V-Image image="nutshell.svg" parentName="first" />
          </template>
        </Columns>
      </MainWrapper>
    </Section>
    <Section>
      <MainWrapper class="w-6/12 items-center">
        <Title text="Let’s discuss your challenges"></Title>
        <Body
          text="Complete the form below to connect with our team of experts about implementing digital primary care solutions. Find the right path to reduce costs and improve patients’ experiences using our AI-powered digital platform."
        ></Body>
        <Card>
          <V-Form>
            <div class="flex flex-col">
              <Body textSize="sm" fontWeight="bold" text="Full name" />
              <Input />
            </div> </V-Form
        ></Card>
      </MainWrapper>
    </Section>
  </Section>
</template>
<script>
export default {
  name: "FirstTemplate",
  data() {
    return {
      list: [{ label: "name" }, { label: "name" }, { label: "name" }],
      bannerCombinations: [
        {
          type: "Title",
          props: {
            text: "Build Better Websites With Bikin",
            textAlign: "center",
            textSize: "6xl",
            fontWeight: "black",
          },
        },
        {
          type: "SubTitle",
          props: {
            text: "Infermedica makes it easier to pre-diagnose, triage, and direct your patients to appropriate medical services.",
            fontWeight: "normal",
            textSize: "2xl",
            textAlign: "center",
          },
        },
        {
          type: "Buttons",
          props: {
            text: "Get Started",
            type: "filled",
            color: "primary",
            align: "center",
            marginTop: 5,
            size: "medium",
          },
        },
      ],
    };
  },
};
</script>
