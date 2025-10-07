import Image from 'next/image'

export default function Sponsors() {
  return (
    <section className="py-24 bg-card-dark text-text-dark border-t border-secondary-dark" id="sponsors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-text-dark">Official <span className="text-primary">Partners</span></h2>
          <p className="mt-4 text-lg text-text-dark/80 max-w-2xl mx-auto">Powering innovation at the F1 Hackathon. We're proud to be supported by industry leaders.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          <Image 
            alt="Sponsor Logo 1"
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 filter invert"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4LfedUDsWEhOHPH3HFVpkKIHo9Z18Cin2bqK0W0F9PFq-5TAVFSkShj6wHFYlZvOFxMYGZ-NVebMZDUrcONCw4jkKb3QMLhzsGgG3V8SneJafwVc6rFGQFs0U81tfsHckq99_-VKR1q3YtHQ7W-sYLqk1Tz0GNqcLlRTD8nCIHg_BudHVGnFcMeOs5ukjXt_bl5PoH9DFmRgd-i08f4jPmRvVmSdqZMs_cleFI52I8vyB5X6wKloHHB9ecz7rkiEcjE1EPTTPddu9"
            width={150}
            height={48}
          />
          <Image 
            alt="Sponsor Logo 2"
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 filter invert"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBijkePy1ptMO52JDQ8PB2b4p07aZoRNHVvoWPFfm9HP5-o9kpzf4-klt4HVdL3RlP4Tn6zVFxSUmB1Y-vNKS43kckch1UMChOFehGxSRdxhJVz6YcjCd1cgGTd-idIGopmZNV6bOvxaN-d01KOQlt5JJwwtveKWM6xPg642NU3j_9DkUfpa7HgaMPKI1-_HplmKwyAtwOHxMh_X60o0cwRs1ccJl-ZaaeD--CfE3wNEU-dkfpz8xPv7utl6z2U4yVB1wJ1tRVS7wKS"
            width={150}
            height={48}
          />
          <Image 
            alt="Sponsor Logo 3"
            className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 filter invert"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXUTCL4BCGQ2IvgI5QCFli1PyTRDf_eOGyhIwzFrOjmH0px-zV8P95CjJUPunrSuryYpmck1gQLDfoRYC0XGRxcVKekeP-1M8qcBFCy23sEDpOzcWnvKvHZbqGUrsKBL-I4OGrKoTv_EOnVets-u7otn-WJtu_X6pSuu22nV4AsWjUDS9xkKBF7GKBTHe1kDGA75bJcXYu_tECbBPzBhCsG6pjluvhdDq91yIhZCoMM0GsfvYRiedk5woKu3B5rGaTQPIOLlbyTEiB"
            width={150}
            height={40}
          />
          <Image 
            alt="Sponsor Logo 4"
            className="h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300 filter invert"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJORwQe2m1iOJ2_kfQpoq3PRxBgOSNheCtdUouqEKW6pePYgJT2BfFw6taCYELAV4hY42bXWfmEshMq3nkaXru9qXzDdu-tW4BO60XgZBkJZebr6PCxYQWpiq0V5vjIyGAMpExLL1V14MXP55RVwxPI2b4YFo1zbSO074pXNtbrM1Lc_D2L4dVvjIuF0_DTZi_yFZSy7iiG-Hzyn4iHAJf9zlJyuis-THpGHQ2cZthMEnFTnBgWr_dHEn3FRmMGySNhyDQ_Q0oQ4ml"
            width={150}
            height={56}
          />
          <Image 
            alt="Sponsor Logo 5"
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 filter invert"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm6g7ySnwal6c2z6qgJUry_fHFaUN9Yl8Ku_7zNA-SLAyfOHcpQKlSFrIhdw4ZgGl60z5UhEdMCl_b4fC16aEyforZiX2o2mNE73RJqKu-5wClrVnsAYSDc5jpfKuGYPYZ9DXx3WspoYHcGkCMZv1QrV-jhf1nUHORBqMQM0g06ww-N8geWyZa4_PlatwyaHke3sVHOyrl5LjQHZMKQ52NqUBRQoBXNpmKeLsCQHhIJg7gUi8G73XEgFtJ4vwDN71fGzKnV52xaS5G"
            width={150}
            height={48}
          />
        </div>
      </div>
    </section>
  )
}
